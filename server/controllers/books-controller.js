
const Book =require("../model/Book")

exports.getAllBooks=async (req,res,next)=>{

let book;
try {
    book=await Book.find();
} catch (error) {
    console.log(error);
    
}
if(!book){
    return res.status(404).json({message:"Not found"})
}
return res.status(200).json({book})
}
exports.getById=async (req,res,next)=>{
    const id=req.params.id
            let book;
            try {
                book=await Book.findById(id);
            } catch (error) {
                console.log(error);
                
            }
            if(!book){
                return res.status(404).json({message:"No Book found"})
            }
            return res.status(200).json({book})
            }
            

exports.addBook=async (req,res,next)=>{
const {name,author,description,price,available,image}=req.body
    let book;
    try {
        book=new Book({
            name,
            author,
            description,
            price,
            available,
            image

        })
        await book.save()
    } catch (error) {
        console.log(error);
        
    }
    if(!book){
        return res.status(500).json({message:"Unable to Add"})
    }
    return res.status(201).json({book})
    }

    exports.updateBook=async(req,res,next)=>{
        const id=req.params.id;
        const {name,author,description,price,available,image}=req.body
        let book;
    try {
        book=await Book.findByIdAndUpdate(id,{
        name,
        author,
        description,
        price,
        available,
        image

    })
    book=await book.save()
} catch (error) {
    console.log(error);
    
}
if(!book){
    return res.status(404).json({message:"Unable to Update"})
}
return res.status(200).json({book})




    }

    exports.deleteBook=async(req,res,next)=>{
        const id=req.params.id;
        let book;
    try {
        book=await Book.findByIdAndDelete(id )
        

   
   
} catch (error) {
    console.log(error);
}
if(!book){
    return res.status(404).json({message:"Unable to Deleted"})
}
return res.status(200).json({message:"Book successfully deleted"})




    }

 
    

