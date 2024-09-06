export async function index(req, res){
    res.render('index', { text: 'This is EJS'})
}

export  async function share(req, res){
    res.render('share', { text: 'Share'})
}
