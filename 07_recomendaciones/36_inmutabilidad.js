const obj = {
	p1:1,
	p2:2,
}
obj.p3 = 3;
const obj2 ={
	...obj,
	a1:3,
}
obj.p4=4;

console.log(obj,obj2)