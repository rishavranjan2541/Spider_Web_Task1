const man = ['h','hu','hum','huma','human'];

alert("Press 'OK' to start. \n And Refresh the page to restart.")
var i,j,k,l,m;
var i=j=k=l=m=0;
document.getElementById('player1').addEventListener('click',() =>{
    let randomNum = Math.floor(Math.random() * 5) + 1;
    document.getElementById('player1').innerText = "Random Number " +randomNum;
    
    
    if (randomNum === 1){
        document.getElementById('p11').classList.add(man[i]);
        i+=1;
    }

    else if(randomNum === 2){
        document.getElementById('p12').classList.add(man[j]);
        j+=1;
    }
    else if(randomNum === 3){
        document.getElementById('p13').classList.add(man[k]);
        k+=1;
    }
    else if(randomNum === 4){
        document.getElementById('p14').classList.add(man[l]);
        l+=1;
    }
    else if(randomNum === 5){
        document.getElementById('p15').classList.add(man[m]);
        m+=1;
    }
    if(i > 4&& j>4 && k>4 && l>4 && m>4){
        alert("Game Over, Player 1 WON!");
        document.getElementById('player1').disabled = true;
        document.getElementById('player2').disabled = true;
    }
})
var n,o,p,q,r;
var n=o=p=q=r=0;
document.getElementById('player2').addEventListener('click',() =>{
    let randomNum = Math.floor(Math.random() * 5) + 1;
    document.getElementById('player2').innerText = "Random Number " +randomNum;

    
    if (randomNum === 1){
        document.getElementById('p21').classList.add(man[n]);
        n+=1;
    }

    else if(randomNum === 2){
        document.getElementById('p22').classList.add(man[o]);
        o+=1;
    }
    else if(randomNum === 3){
        document.getElementById('p23').classList.add(man[p]);
        p+=1;
    }
    else if(randomNum === 4){
        document.getElementById('p24').classList.add(man[q]);
        q+=1;
    }
    else if(randomNum === 5){
        document.getElementById('p25').classList.add(man[r]);
        r+=1;
    }
    if(n > 4&& o>4 && p>4 && q>4 && r>4 ){
        alert("Game Over, Player 2 WON!");
        document.getElementById('player1').disabled = true;
        document.getElementById('player2').disabled = true;
    }
})