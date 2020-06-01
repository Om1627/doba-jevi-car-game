
function collide(body1,body2){



if (body1.x - body2.x < body2.width/2 + body1.width/2
    && body2.x - body1.x < body2.width/2 + body1.width/2
    || body1.y - body2.y < body2.height/2 + body1.height/2
    &&body2.y - body1.y < body2.height/2 + body1.height/2) {
  body1.shapeColor = "red";
  body2.shapeColor = "red";
}
else {
  body1.shapeColor = "green";
  body2.shapeColor = "green";
}}