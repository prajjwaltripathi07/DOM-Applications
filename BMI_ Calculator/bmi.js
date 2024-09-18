const form=document.querySelector('form')

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const results=document.querySelector('#results')
    const result=document.querySelector('#result')
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    if(height==='' || height<0 || isNaN(height))
        {
            results.innerHTML=`Please give a valid height ${height}`;
        }
         else if(weight===''||weight<0||isNaN(weight))
        {
            results.innerHTML=`Please give a valid weight ${weight}`;
        }
        else 
        {
            const bmi=parseFloat((weight/((height*height)/10000)).toFixed(2)) 
            results.innerHTML=`<span>${bmi}</span>`;
            if(bmi<18.6)
            {
                let h="UNDERWEIGHT";
                result.innerHTML=`<span style="color: yellow;"> ${h}</span>`;
            }
             else if(bmi>24.9)
            {
                let h="OVERWEIGHT";
                result.innerHTML=`<span style="color: red;"> ${h}</span>`;
            }
            else 
            {
                let h="NORMAL BMI";
                result.innerHTML=`<span style="color: green;"> ${h}</span>`;
            }


        }
});