
var num = 1 //Exercise using nested if, do and while

if (num <= 10){ //compare var num with determinated sentence (*I doing this is limitate the number from var num)

   // do {
   //    console.log(`teste ${num}`)
   //    num--
   // }
    while (num != 0){ //while num different of 0 execut the block, whem equal to 0 jump the block
        console.log(`teste ${num}`) // print "test n" until n = 1
        num -- //decrease the var num
    }
}

else if( num != 0){ //do this cause I don't wont to print "Unespected number 0" every time
console.log(`Unespected number ${num}`) // *if num > 10 (if test) print messege with
}