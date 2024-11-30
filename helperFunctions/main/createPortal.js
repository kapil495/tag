function createPortal (app,parent_dir){
    app.get(`${parent_dir}/:dir`,(req,res)=>{
        console.log(`request for the following path ` + path.join(__dirname,`${parent_dir}/${req.params.dir}`));
        res.sendFile(path.join(__dirname,`${parent_dir}/${req.params.dir}`))
    })
    console.log(`created \b ${parent_dir}`)
}
module.exports ={ createPortal }