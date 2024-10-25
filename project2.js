function submitReview(){
    const productName = document.getElementById('productName').value.trim();

    const rating = document.querySelector('input[name="rating"]:checked');
    const ratingValue = rating ? rating.value : null;

    const productComment = document.getElementById('productComment').value.trim();

    if (!productName) {
        alert("Please enter the product name.");
        return;
    }

    else if (!ratingValue) {
        alert("Please select a rating.");
        return;
    }

    else if (!productComment) {
        alert("Please enter a comment.");
        return;
    }

    console.log({
        productName: productName,
        rating: ratingValue,
        comment: productComment
    });

    document.getElementById('productName').value = '';
    document.querySelector('input[name="rating"]:checked').checked = false;
    document.getElementById('productComment').value = '';

    alert('Review submitted successfully!');    
}