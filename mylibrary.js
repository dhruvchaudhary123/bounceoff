
function istouching (object1,object2)
{

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y <object2.height/2 + object1.height/2) {
  return true;

  



}

else {
  return false;
  
  
}


}

function bounceoff(ob1,ob2)
{

if(ob1.x-ob2.x < ob1.width/2 + ob2.width/2
&&ob2.x-ob1.x < ob2.width/2 + ob1.width/2)
{
ob1.velocityX= ob1.velocityX * -1;
ob2.velocityX= ob2.velocityX * -1;

}


}

