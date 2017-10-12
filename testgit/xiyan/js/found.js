
		var oBtn=document.getElementById('btn');//生成喜宴按钮
		
		var oTable=document.querySelectorAll('.table');//每张桌子
		var oSection=document.getElementsByTagName('section')[0];//内容
		var oClick=document.querySelector('.click');
		var len=oTable.length;
		var aLi=document.getElementsByTagName('li');
		var oSeat=document.querySelector('.seat');
		var oAdd=document.querySelector('.add');//最后一张添加桌子
		
		
		oBtn.onclick=function(){
			motai('.motai','close');
		};
		
		
		oAdd.onclick=function(){
			var _num='';
			var num_max=oAdd.parentNode.previousElementSibling || oAdd.parentNode.previousSibling;
			var arr=num_max.innerText.split('');
			for(var i=0;i<arr.length;i++){
				if(!isNaN(arr[i])){
					_num+=arr[i];
				}
			}
			add_chair(_num);
		}
		//添加酒桌
		function add_chair(num){
			//添加的桌数
			num++;
			//创建一个类为minor的大div
			var oDiv=document.createElement('div');
			oDiv.className='minor';
			
			//创建一个类为table的div
			var oDiv1=document.createElement('div');
			oDiv1.className='table';
			oDiv1.innerText='第'+ num +'席';
			
			var oUl=document.createElement('ul');
			oUl.className='chair';
			for(var i=0;i<6;i++){
				var aLi=document.createElement('li');
				oUl.appendChild(aLi);
			}
			//把ul放到table后面
			oDiv1.appendChild(oUl);
			//把table放到minor后面
			oDiv.appendChild(oDiv1);
			//把新创建的minor插入add之前，也就是插入到加号之前
			oSeat.insertBefore(oDiv,oAdd.parentNode);
			//获取table
			oTable=document.querySelectorAll('.table');
			len=oTable.length;
			//调用toBig，也就是让新添加的酒桌也有放大的效果
			toBig();
			aLi=document.getElementsByTagName('li');
			//调用li，也就是让新添加的酒桌的小座位也有放大的效果
			li();
		}
		
		
		
	function toBig(){
			for(var j=0;j<len-1;j++ ){	
				oTable[j].off=true;
				oTable[j].index=j;
				oTable[j].onclick=function(){
					if(this.off){
						for(var i=0;i<len;i++){
							oTable[i].style.display='none';
						};
						this.style.display='block';
						oSection.classList.add('sec');
						oBtn.style.display='none';
					
						this.parentNode.classList.add('toAuto');
						if(this.index == 0){
							this.classList.add('toBig1');
						}else{
							this.classList.add('toBig');
						}
						this.off=false;
					}else{
						
						for(var i=0;i<len;i++){
							oTable[i].style.display='block';
						};
						oSection.classList.remove('sec');
						this.parentNode.classList.remove('toAuto');
						oBtn.style.display='block';
						if(this.index == 0){
							this.classList.remove('toBig1');
						}else{
							this.classList.remove('toBig');
						}
						this.off=true;
					}
					
				}
				
			}
}
	toBig();
	function li(){
    
	for(let k=0;k<aLi.length-6;k++){
		
			aLi[k].onclick=function(ev){
				var ev = ev || window.event;
				ev.stopPropagation();
				for(var n=0;n<aLi.length;n++){
					aLi[n].style.background='url(img/ren.jpg) no-repeat';
					aLi[n].style.backgroundSize='100%';
				};
				this.style.background='url(img/tou.jpg) no-repeat';
				this.style.backgroundSize='100%';
			}
	}
}
	li();

		function motai(mo,close){
			var oMotai=document.querySelector(mo);
			var oBox=oMotai.querySelector('.box');
			var oBtn_close=document.getElementById(close);
			console.log(oMotai)
				oMotai.classList.add('transition');
				setTimeout(function(){
					oBox.classList.add('box_tran');
				},500);
				
			oBtn_close.onclick=function(){
				oMotai.classList.remove('transition');
				oBox.classList.remove('box_tran');
			}
		}