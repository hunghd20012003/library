import React from "react";
import axios from "axios";
function BookDetail(props){
    function handleDelete(){
        const deleteBook = async () => {
            try{
                const res = await axios.post("http://localhost:5000/books/delete", {bookId: props.bookId});
                console.log(res.data);
                alert("Xóa thành công")
            }catch(error){
                console.log(error.message);
                alert("Xóa thất bại")
            }
        }
        deleteBook();
    }
    return (
        <tr>
            <td>{props.bookId}</td>
            <td>{props.name}</td>
            <td>{props.publishor}</td>
            <td>{props.author}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
            <td>{props.available}</td>
            <td><button className="btn btn-primary btn-sm border rounded-pill" type="button">Edit</button><button className="btn btn-danger btn-sm border rounded-pill" type="button" onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default BookDetail;