let switchButton = document.getElementById('donate-type');
let pontual = document.getElementById('pontual');
let mensal = document.getElementById('mensal');
let amount1 = document.getElementById('amount1');
let amount2 = document.getElementById('amount2');
let amount3 = document.getElementById('amount3');
let amount4 = document.getElementById('amount4');
let amount5 = document.getElementById('amount5');
let amount6 = document.getElementById('amount6');
let amount7 = document.getElementById('amount7');
let amount8 = document.getElementById('amount8');
let costum = document.getElementById('costum_amount');
let buttonDoar = document.getElementById('button-doar');
let particular = document.getElementById('particular');
let empresa = document.getElementById('empresa');
let donatesource = document.getElementById('donate-source');

switchButton.addEventListener('click', function () {
    if (switchButton.value != 0) {
        switchButton.value = 0;
        pontual.style.display = 'none';
        mensal.style.display = 'block';
        document.getElementById('button-doar').textContent= 'DOAR REGURLARMENTE';
    }
    else
    {
        switchButton.value = 1;
        pontual.style.display = 'block';
        mensal.style.display = 'none';
        document.getElementById('button-doar').textContent= 'DOAR AGORA';
    }
});

amount1.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    bigger[0].style.color='white';
    amount1.style.backgroundColor = 'blue';
    amount1.style.color = 'white';
    month[0].style.backgroundColor = 'blue';
    month[0].style.color = 'white';
    month[8].style.display='block';
    month[8].textContent='Com 10$ fornecemos Água potável para 10 refugiados, durante um mês.';
    for (let i=1; i < month.length-1; i++) {
        bigger[i].style.color = 'blue';
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        bigger[i].style.backgroundColor = 'transparent';
        month[i].style.backgroundColor = 'transparent';
    }
});

amount2.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    bigger[1].style.color='white';
    amount2.style.backgroundColor = 'blue';
    amount2.style.color = 'white';
    month[1].style.backgroundColor = 'blue';
    month[1].style.color = 'white';
    month[8].style.display='block';
    month[8].textContent='Com 15€ fornecemos Acesso à educação a 9 crianças, durante um ano.';
    for (let i=0; i < month.length-1; i++) {
        if(i==1)
        {i++}
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

amount3.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    bigger[2].style.color='white';
    amount3.style.backgroundColor = 'blue';
    amount3.style.color = 'white';
    month[2].style.backgroundColor = 'blue';
    month[2].style.color = 'white';
    month[8].style.display='block';
    month[8].textContent='Com 25€ fornecemos Cuidados de saúde para 15 pessoas, durante um ano.';
    for (let i=0; i < month.length-1; i++) {
        if(i==2)
        {i++}
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

amount4.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    
    amount3.style.backgroundColor = 'blue';
    amount3.style.color = 'white';
    box[3].style.backgroundColor = 'blue';
    bigger[3].style.backgroundColor = 'blue';
    bigger[3].style.color='white';
    month[8].style.display='none';
    for (let i=0; i < month.length-1; i++) {
        if(i==3)
        {i++}
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

amount5.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    bigger[4].style.color='white';
    amount5.style.backgroundColor = 'blue';
    amount5.style.color = 'white';
    month[4].style.backgroundColor = 'blue';
    month[4].style.color = 'white';
    month[8].style.display='block';
    month[8].textContent ='Com 20€ fornecemos duas lonas de plástico para reforçar o abrigo de 1 família e torná-lo impermeável para o inverno.';
    for (let i=0; i < month.length-1; i++) {
        if(i==4)
        {i++}
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

amount6.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    bigger[5].style.color='white';
    amount6.style.backgroundColor = 'blue';
    amount6.style.color = 'white';
    month[5].style.backgroundColor = 'blue';
    month[5].style.color = 'white';
    month[8].style.display='block';
    month[8].textContent = 'Com 40€ fornecemos Acesso médico anual para 4 pessoas.';
    for (let i=0; i < month.length-1; i++) {
        if(i==5)
        {i++}
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

amount7.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    bigger[6].style.color='white';
    amount7.style.backgroundColor = 'blue';
    amount7.style.color = 'white';
    month[6].style.backgroundColor = 'blue';
    month[6].style.color = 'white';
    month[8].style.display='block';
    month[8].textContent='Com 80€ fornecemos subsídio de emergência a 4 famílias deslocadas na Síria durante os rigorosos meses de inverno.'
    for (let i=0; i < month.length-1; i++) {
        if(i==6)
        {
            i++
        }
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

amount8.addEventListener('click', function () {
    let month = document.getElementsByClassName('month');
    let box = document.getElementsByClassName('box');
    let bigger = document.getElementsByClassName('bigger');
    
    amount8.style.backgroundColor = 'blue';
    amount8.style.color = 'white';
    box[7].style.backgroundColor = 'blue';
    bigger[7].style.backgroundColor = 'blue';
    bigger[7].style.color='white';
    month[8].style.display='none';
    for (let i=0; i < month.length-1; i++) {
        if(i==7)
        {
            i++;
        }
        box[i].style.backgroundColor = 'beige';
        month[i].style.color = 'blue';
        month[i].style.backgroundColor = 'transparent';
        bigger[i].style.color = 'blue';
    }
});

document.getElementById('politicaPrivacidade').addEventListener('click',function () {
    if (document.getElementById('politicaPrivacidade').value==0) {
        document.getElementById('politicaPrivacidade').value=1;
        donatesource.style.display = 'block';
    }
    else{
        document.getElementById('politicaPrivacidade').value=0;
        donatesource.style.display = 'none';
    }
})

// document.getElementById('politicaPrivacidade').addEventListener('click', function () {
//     if(document.getElementById('politicaPrivacidade').value==1 && getemail.checkValidity()==true)
//     {
//        buttonDoar.style.backgroundColor = 'green';}
//     if(document.getElementById('politicaPrivacidade').value==0)
//     {
//         buttonDoar.style.backgroundColor = 'gray';
//     }
// });

function getvalue(){
    if(amount1.style.backgroundColor=='blue')
    {return 10 ;}
    if(amount2.style.backgroundColor=='blue')
    {return 15;}
    if(amount3.style.backgroundColor=='blue')
    {return 25;}
    if(amount4.style.backgroundColor=='blue')
    {return custom[0].value;}
    if(amount5.style.backgroundColor =='blue')
    {return 20;}
    if(amount6.style.backgroundColor=='blue')
    {return 40;}
    if(amount7.style.backgroundColor=='blue')
    {return 80;}
    if(amount8.style.backgroundColor=='blue')
    {return custom[1].value;}
}

buttonDoar.addEventListener('click', function () {
    if(document.getElementById('politicaPrivacidade').value==1)
    {
        if(particular.value==1)
        {
            if(document.getElementById('pNome2').value!='' && document.getElementById('numero2').value!='' && document.getElementById('NIF2').value!='')
            {
                alert('com ' + getvalue() + '$ podemos alimentar ' + Math.round(getvalue()/3) + ' refugiados');
            }
        }
        else{
            if(document.getElementById('pNome').value!='' && document.getElementById('numero').value!='' && document.getElementById('NIF').value!='' )
            {
                alert('com ' + getvalue() + '$ podemos alimentar ' + Math.round(getvalue()/3) + ' refugiados');
            }
        }
    }
});

particular.addEventListener('click', function () {
    if(particular.value==0)
    {
        particular.value=1;
        document.getElementById('particular-form').style.display= 'flex';
        buttonDoar.style.backgroundColor = 'green';
    }
});

empresa.addEventListener('click', function () {
    if(empresa.value==0)
    {
            document.getElementById('empresa-form').style.display= 'flex';
            buttonDoar.style.backgroundColor = 'green';
    }
});