const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(__dirname + '/dist/karankraina/'));

// Api route endpoints defined here

app.use((request, response, next) => {
    console.log(`Request for : ${request.url}`);
    next();
})

app.get('/api/configuration', (request, response) => {
    response.json({
        endpoints: {
            host: process.env.HOST || '',
            blogs: 'blogs'
        }
    });
});

app.get('/api/blogs', (request, response) => {
    response.json([
        {
            id: 'let-vs-const',
            title: "let vs const vs var",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
            content: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
                    image: "/assets/karan-raina.jpg"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
                }
            ],
            author: "Karan Raina",
            publishedDate: "August 21, 2021"
        },
        {
            id: 'template-iteral',
            title: "What is a template literal ? 🤔",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel sodales erat efficitur et. Praesent vel risus ex. Nullam leo enim, scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio a bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus finibus fermentum quis non nisl. Donec in consectetur libero, sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
            content: [
                {
                    text: "Some pararaph 2 text here",
                    image: ""
                }
            ],
            author: "Karan Raina",
            publishedDate: "August 21, 2021"
        }
    ]);
});



// Serve angular app here
app.get('*', (request, response) => {
    response.sendFile(__dirname + '/dist/karankraina/index.html')
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
});