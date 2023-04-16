localStorage.setItem("transaction",JSON.stringify([]));
let form=document.querySelector("form");
			form.addEventListener('submit',function(s){
				s.preventDefault();
				story=document.getElementById("story");
				transactionname=document.getElementById("name");
				transactionamount=document.getElementById("Amount");
			   let  value=document.getElementById("name").value;
			   let  name=document.getElementById("Amount").value;
			   let inc=document.getElementById("income");
			   let  out=document.getElementById("expence");
			   let  bal=document.getElementById("balance");
			   let a=JSON.parse(localStorage.getItem("transaction"));
				if((name=='') || value==''){
				  alert("please Ender the value");
				 }
				  else if((!isNaN(value))){
					  alert("name of transaction is only for letters");
				  }
				  else if(isNaN(name)){
					alert("amount is only for numbers");
				  }
			  else{
				b={
				  name:value,
				  amount:name
				}
				value="";
				amount="";
				a.push(b);
				localStorage.setItem("transaction",JSON.stringify(a));
				document.getElementById("name").value="";
				document.getElementById("Amount").value="";
				let h=JSON.parse(localStorage.getItem("transaction"));
				let income=[];
				let expence=[];
				h.map((e)=>
				{
				  if((e.amount<0)){
					
					  expence.push(parseInt(e.amount));
					  out.innerHTML=expence.reduce((e,b)=>e+b);
					}
				 else if(e.amount>0){
					  income.push(parseInt(e.amount));
				  inc.innerHTML=income.reduce((e,b)=>e+b);
				}
				bal.innerHTML=parseInt(out.innerHTML)+parseInt(inc.innerHTML)});
			  }
			  let h=JSON.parse(localStorage.getItem("transaction"));
			story.innerHTML=h.map((e,i)=>`<li class=${e.amount<0 ?"red":"normal"}>Name of the transaction:<span>${e.name}</span>;Amount of paying:<span>${e.amount}</span><button onclick="delt(${i})" type="submit"}>remove</button></li>`);
		});