# ngx-step
A simple library module to generate the different stages for activity to track multiple stages.

![image](https://user-images.githubusercontent.com/55994712/215117760-5b4946f9-2c5c-41e5-b081-952daf0b57ac.png)


# NgxStep

NgxStep library is easy to use into your angular project which can be use for the purpose of generating and showing  different stages for any lifecycle stages and their status. i.e Product lifycycle stages , Supply chain lifecycle stages, Product shipment and delivery tracking and many more.

Library is easy to configure and customizes as per your requirements.

This Library comes with Two options :

**1) BASIC**

**2) CUSTOM**

## How to use

Use of this library is very simple .

**app.module.ts**

```ruby
import {NgxStepModule} from 'ngx-step'
```
Then add into imports array of app module file

```ruby
@NgModule({
  declarations: [
  ],
  imports: [
    NgxStepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**Use inside your component and HTML**

**component.ts** code
```ruby
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  stages = [
  {
    "name": "Order Placed",
    "status": "COMPLETED",
  },
  {
    "name": "Order Shipped",
    "status": "COMPLETED",
  },
  {
    "name": "Out For Delivery",
    "status": "IN_PROGRESS",
  }
]
}

```

**component.html** code

```ruby
<ngx-step [stages]="stages">
</ngx-step>
```

# Advanced Configuration inputs parameters

**1) <code>stages</code>**

Array of Object which will hold your stage data. Each object in an array represent one stage. Stage object will have Two Keys:

1) **<code>name</code>** = This is the Name of your Stage and will be visible to UI . Stage name can be any text.

2) **<code>status</code>** = this will hold the current status value of your stage.

Possible Values of Stage <code>status</code> are **<code>NOT_STARTED </code>,<code> IN_PROGRESS </code> ,<code> COMPLETED </code>, <code> FAILED </code>** 

Example: 
```ruby 
stages =[{'name':'STEP-1','status':'COMPLETED'},{'name':'STEP-2','status':'IN_PROGRESS'}] 
```

**2) <code>options</code>**

This input parameter is an object and  used for overriding the default configurations to get the more felxibility of use as your requirements. If user is passing this parameter then make sure to select the type <code>**'CUSTOM'**</code> .

<code>options</code> 

Object has following keys:

  1) <code> **type** </code> : Default **BASIC**  Possible Values are 
      a) BASIC - Default Selected value for simple stages with status.
      b) CUSTOM - Use this option if want to manage your own custom stages and status logic from diffrent progress update info data.

  2) <code>**finalStageName**</code> : By default it will be <code>'FINISH'</code>, and will be the name of last Stage. Pass the string value if you want to override the Last stage name. 
  Default value is set to `FINISH`.

  3) <code>**isMultiWordStageName**</code>: Aceept Boolean value, Set as <code>True</code> if your stage name is multiple words name like
  ORDER_SHIPPED , DEVICE_INSTALLATION etc. 

  ```Note: If value is true then textSeparator value must be provide.```

  4) <code> **textSeparator** </code>: Is the symbol used identified the text separator symbol used for multiple Word stage names.
  Default value is <code>'_'</code>.

  **Structure:**
  ```ruby 
  options = {
      type: 'BASIC', 
      finalStageName: 'FINISH',
      isMultiWordStageName : false,
      textSeparator: '_'
    }
  ```

**5) <code>updateProgressLogs</code>**

Its and array of object will be used when user has selected the CUSTOM type stepper  i.e  <code>**options.type = 'CUSTOM'**</code> .
This option will be usefull when you have some real time stage data updates with some additional information about each stage in addition to name and status. like Message to end user , Detailed Logs information,  Error information etc.

  **Structure:**

  ```ruby 

  [{'name':'STEP-1','status':'COMPLETED' , 'message': "We have completed the stage1"},{'name':'STEP-2','status':'IN_PROGRESS' , 'message': "This stage is in progress"}]

  ```
**6) <code>jobOverallStatus</code>**

Overall status of Job or Task which will have following values

a) ACTIVE : Pass this value to represent that main process is Active and in progress.

b) NOT_STARTED: Pass this value to represent that main process is not yet started . In this case status of your sub stages and child stages will be <code>NOT_STARTED</code>.

c) COMPLETED : Pass this value to represent that main process is completed and all its sub or child stages has been completed successfully.

d) FAILED: Pass this value to represent that main process is Failed due to any of the reason or any of the state failed.



## Reference
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## License
**MIT**
