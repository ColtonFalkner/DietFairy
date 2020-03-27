const authRoutes = require('./routes/authroutes.js');
const app = express();

// set up view engine
app.set('view engine' , 'ejs');

// set up routes 
app.use('/auth', authRoutes);

// create home route
app.get('/', (req,res) => {
    res.render('home');
});




