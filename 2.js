const express = reqire('express');
const app = express();
app.listen(3000, () => console.log('listing at 3000'));
app.use(express.static('public'));

app.get('https://springbootdemoproject.herokuapp.com/tagids', (request, respone )) => {
    console.log(request);
});

