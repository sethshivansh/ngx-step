# ngx-step
A simple library module to generate the different stages for activity to track multiple stages.

![image](https://user-images.githubusercontent.com/55994712/215117760-5b4946f9-2c5c-41e5-b081-952daf0b57ac.png)

Detailed Tracking summary support:

<img width="945" alt="tracking_sample" src="https://user-images.githubusercontent.com/55994712/218972871-042b0f49-88f3-4b25-819c-ab3e3cc881a6.PNG">


# Dependent modules
1) **Fontawsome** module need to install at project level to support icons used in this library. this library you need to install manually in your application.

```ruby 
npm i @fortawesome/fontawesome-free
``` 

2) **Moment.js**  This library you need to install manually in your application. Library is used for the purpose of datetime data to display in user time zone converted format.

```ruby 
npm i moment
``` 
then 

```ruby 
npm i ngx-step
``` 

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

## Advanced usages to show Detailed Summary in tabular format ( Works Only with **CUSTOM** type option )

**component.html** file code

```ruby
<ngx-step 
[updateProgressLogs]="progressDataObject" 
[stages]="stages"
[jobOverallStatus]="'ACTIVE'"
[options]="stepperOptions"
[showLogs]="true"
[logsTableData]="tableLogs"
[logTableOptions]="logTableOptions">
</ngx-step>
```

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
      "status": "COMPLETED",
    }
  ]
  stepperOptions : any ={
    type: 'CUSTOM',
    finalStageName: 'DELIVERED',
    isMultiWordStageName: true,
    textSeparator: '_'
  };
  logTableOptions: any = {
    tableTitle: 'Tracking Information',
    showTimeDiffColumn: true
  }
  tableLogs: any = [
      {
      "error_message": "",
      "message": "Your Order accepted by seller and has been placed.",
      "stage": "Order Placed",
      "status": "COMPLETED",
      "time_stamp": "2023-01-03T09:15:19.855000"
      },
      {
        "error_message": "",
        "message": "Order has been shipped. Moved to neareast delivery hub.",
        "stage": "Order Shipped",
        "status": "COMPLETED",
        "time_stamp": "2023-01-03T09:15:32.806000"
      },
      {
        "error_message": "",
        "message": "Out For Delivery. Agent will contact you soon.",
        "stage": "Out For Delivery",
        "status": "IN_PROGRESS",
        "time_stamp": "2023-01-03T09:15:41.687000"
      },
      {
        "error_message": "Customer Door was Locked!",
        "message": "We have tried to reach you. Dont worry we have rescheduled your delivery for next working day.",
        "stage": "Out For Delivery",
        "status": "IN_PROGRESS",
        "time_stamp": "2023-01-03T09:15:49.787000"
      },
      {
        "error_message": "Customer not reachable.",
        "message": "We have tried to reach you. Dont worry we have rescheduled your delivery for next working day.",
        "stage": "Out For Delivery",
        "status": "FAILED",
        "time_stamp": "2023-01-03T09:15:49.787000"
      }
  ]
}

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

**3) <code>updateProgressLogs</code>**

Its and array of object will be used when user has selected the CUSTOM type stepper  i.e  <code>**options.type = 'CUSTOM'**</code> .
This option will be usefull when you have some real time stage data updates with some additional information about each stage in addition to name and status. like Message to end user , Detailed Logs information,  Error information etc.

  **Structure:**

  ```ruby 

  [{'name':'STEP-1','status':'COMPLETED' , 'message': "We have completed the stage1"},{'name':'STEP-2','status':'IN_PROGRESS' , 'message': "This stage is in progress"}]

  ```
**4) <code>jobOverallStatus</code>**

Overall status of Job or Task which will have following values

a) ACTIVE : Pass this value to represent that main process is Active and in progress.

b) NOT_STARTED: Pass this value to represent that main process is not yet started . In this case status of your sub stages and child stages will be <code>NOT_STARTED</code>.

c) COMPLETED : Pass this value to represent that main process is completed and all its sub or child stages has been completed successfully.

d) FAILED: Pass this value to represent that main process is Failed due to any of the reason or any of the state failed.

## Additional Configuration options for Progress summary Table at the bottom of progress stepper.

**5) <code>showLogs</code>**

A boolean variable use as TRUE when you want to show Detailed summary table information on Tracking details. If value is true then a table will be visible below stage progress.

**6) <code>logsTableData</code>**

An array of objects which hold all of your summary table data and will be visible in UI just below the stepper progress diagram.Each object in this array reperesent one table row of data.

Note- Make sure to use the exactaly same keys of object in <code>logTableData</code> Array.
 
<code> Sample Example: </code>

```ruby
tableLogs: any = [{
  "error_message": "",
  "message": "Your Order accepted by seller and has been placed.",
  "stage": "Order Placed",
  "status": "COMPLETED",
  "time_stamp": "2023-01-03T09:15:19.855000"
},
{
  "error_message": "",
  "message": "Order has been shipped. Moved to neareast delivery hub.",
  "stage": "Order Shipped",
  "status": "COMPLETED",
  "time_stamp": "2023-01-03T09:15:32.806000"
},
{
  "error_message": "",
  "message": "Out For Delivery. Agent will contact you soon.",
  "stage": "Out For Delivery",
  "status": "IN_PROGRESS",
  "time_stamp": "2023-01-03T09:15:41.687000"
},
{
  "error_message": "Customer Door was Locked!",
  "message": "We have tried to reach you. Dont worry we have rescheduled your delivery for next working day.",
  "stage": "Out For Delivery",
  "status": "IN_PROGRESS",
  "time_stamp": "2023-01-03T09:15:49.787000"
},
{
  "error_message": "Customer not reachable.",
  "message": "We have tried to reach you. Dont worry we have rescheduled your delivery for next working day.",
  "stage": "Out For Delivery",
  "status": "FAILED",
  "time_stamp": "2023-01-03T09:15:49.787000"
}
]
```
**7)logTableOptions**

This is again an configuration Object to override the default configuration of summary table

Structure:

```ruby
 logTableOptions: any = {
    tableTitle: 'Tracking Information',
    showTimeDiffColumn: true // use this value as true if you want to show the relative time duration calulation for each stage. ( i.e Time taken by each stage to complete)
  }
```

## Changes Logs

1) <code>v0.0.1</code> -Supports only BASIC type stepper.

2) <code>v1.0.0</code> - Added support for CUSTOM option to customise your stages in more flexible way.

3) <code>v1.1.0</code> - Fixed issue related to CUSTOM stages and added support to allow normal STGAE array data as well.

4) <code>v1.2.1</code> - Added support to show the detailed Logs.

Added configuration options: 
```ruby
logsTableData: any = [];

showLogs: Boolean = false;

logTableOptions:any = {
    tableTitle: 'Events & Logs',
    showTimeDiffColumn: false,
  };
```
Screenshot
<img width="945" alt="tracking_sample" src="https://user-images.githubusercontent.com/55994712/218972871-042b0f49-88f3-4b25-819c-ab3e3cc881a6.PNG">


example: For custom now you can provide the stages  in below formats as well:

```ruby 
stages=['order_placed' , 'order_shipped', 'out_for_delivery']
```
OR

```ruby
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
```
5) <code>v1.2.2</code> - Added support for custom color option given to logs & traking information Table to override the stages colors.

## How to override the Color of Status in Events and Logs Table 

Add the below code into your component level CSS file.

```ruby
:host ::ng-deep .stage_completed {
  color: rgb(0, 128, 23) !important;
}

:host ::ng-deep .stage_progress {
  color: rgb(241, 213, 30) !important;
}
:host ::ng-deep .stage_failed {
  color: rgb(244, 43, 17) !important;
}

:host ::ng-deep .stage_progress {
  color: rgb(241, 213, 30) !important;
}

:host ::ng-deep .stage_not_started {
  color: rgb(68, 96, 232) !important;
}
```


## Reference
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## License
**MIT**
