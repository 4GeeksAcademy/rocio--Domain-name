let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let format=['.com']

const email=document.getElementById("email");

for (let i=0; i<pronoun.length;i++){
    for(let j=0; j<adj.length;j++){
        for(let k=0; k<noun.length;k++){
            for(let l=0; l<noun.length;l++){
                let result=pronoun[i]+adj[j]+noun[k]+format[l];
                console.log(result);
                email.innerHTML+=`<li>${result}</li>`
            }

        }
    }
}
