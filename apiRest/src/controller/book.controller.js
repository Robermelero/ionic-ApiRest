const {pool} = require("../database")

const getBook = async (request,response) => 
{
    try
    {
     
        let respuesta;
        let sql = "SELECT * FROM book  WHERE id_book = ?";
        let params = [request.params.id_book];
        let res = await pool.query(sql,params);
        
        if (res[0].length > 0){
            respuesta = {
            error:false,
            codigo:200,
            mensaje:"Libros disponibles",
            data: res[0]};
        }else{
            respuesta = {
            error:true,
            codigo:200,
            mensaje:"No hay libros",
            data: null};
        }
        response.send(respuesta)
    }
    catch(err)
    {
        console.log(err);
    }
}




const addBook = async (request,response) => 
{
    try
    {
        console.log(request.body)
        let params = [];
        let sql = "INSERT INTO book (title,type,author,price,photo) VALUES (?, ?, ?, ?, ?)";
        params = [
                request.body.title,
                request.body.type,
                request.body.author,
                request.body.price,
                request.body.photo];
                console.log(sql);
        let [result] = await pool.query(sql,params);
        console.log(result);
        
        if (result.insertId)
            response.send(String(result.insertId));
        else 
            response.send("-1");
    }
    catch (error)
    {
        response.send(error)
    }
}

const updateBook = async (request, response) => 
{
    try
    {
        console.log(request.body)
        let params = [];
        let sql = "UPDATE book SET title = ?, type = ?, author = ?, price = ?, photo = ? WHERE id_book = ?";
        params = [
                request.body.title,
                request.body.type,
                request.body.author,
                request.body.price,
                request.body.photo];
        console.log(sql);
        let [result] = await pool.query(sql,params);
        if (result)
            response.send(result);
        else 
            response.send("-1");

    }
    catch (error)
    {
        response.send(error)
    }
} 

const deleteBook = async (request,response) =>
{
    try
    {
        console.log(request.body)
        let sql = "DELETE FROM book WHERE id_book = ?";
        console.log(sql);
        let params = [request.params.id_book]
        let [result] = await pool.query(sql,params);
        console.log(result)
        if (result)
            response.send(result);
        else 
            response.send("-1");

    }
    catch (error)
    {
        response.send(error)
    }
}


module.exports = {getBook, addBook, updateBook, deleteBook}