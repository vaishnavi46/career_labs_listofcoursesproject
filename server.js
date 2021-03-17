const express=require('express');
const path=require('path');
const app=express();
app.use(express.static(__dirname+'/dist/carrer_labs_list_of_courses'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/carrer_labs_list_of_courses/index.html'));
});
app.listen(process.env.PORT || 8080);