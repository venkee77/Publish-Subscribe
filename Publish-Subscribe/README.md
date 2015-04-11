#Javascript-Subscribe/Publish#

## Reason ##

#### In Web development there will be need for decoupling of modules. ####
#### One module cannot be dependent on other module, in that situation, the design becomes tightly coupled ####
#### and becomes difficult to enhance the functionality. ####

#### So, the Subscibe and Publish pattern should be followed to achieve the decoupling of modules. ####

##Html##
```Shell
<button data-role="publish">Publish</button>

<p data-role="result-container">
  <span data-role="result"></span>
</p>
```

##Code Snippet##
```Shell
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="./subscription.js"></script>
<script>
// Sample method
(function($,window,document,undefined){

  $(document).ready(function(){
     var eventName = "pub-sub-event";

     SubscriptionModel.subscribe(eventName,function(){
       var element = $("p[data-role='result-container']").find("span[data-role='result']");
       $(element).html("Publish-Subscribe Event Example");
     });

     $("button[data-role='publish']").on("click",function(){
       SubscriptionModel.publish(eventName);
     });

  });
})(jQuery,window,document);

</script>
```
