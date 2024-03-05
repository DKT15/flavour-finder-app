document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const reviewData = {};
    formData.forEach((value, key) => {
        reviewData[key] = value;
    });


    // send review data to API
    fetch('https://flavourfinder.tjthouhid.com/reviews.php',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(reviewData), 
    })

    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok ');
        }

        return response.json();
    })

    .then(data => {
        console.log('Review submitted successfully:', data);
        alert('Review submitted successfully!');
        // Optionally, reset the form
        document.getElementById("reviewForm").reset();
    })

    .catch(error => {
        console.error('There was a problem submitting the review:', error);
        alert('There was a problem submitting the review. Please try again later.');
    });

    });

  


 
const allStar = document.querySelectorAll('.rating .star')
const ratingValue=document.querySelector('.rating input')
allStar.forEach((item,idx)=> {
item.addEventListener('click', function(){
    let click = 1
    ratingValue.value= idx + 1
    console.log(ratingValue.value)
    
    
    allStar.forEach(i=>{
        i.classList.replace('bxs-star','bx-star')
        i.classList.remove('active')

    })
    for (let i=0; i<allStar.length; i++){
        if(i <= idx){
            allStar[i].classList.replace('bx-star', 'bxs-star')
            allStar[1].classList.add('active')
        } else{
            allStar[i].style.setProperty('--i',click)
            click++
        }
    }
})
})