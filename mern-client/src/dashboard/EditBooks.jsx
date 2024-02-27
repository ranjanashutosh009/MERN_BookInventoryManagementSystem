
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
    const { id } = useParams();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-Help",
        "Memoir",
        "Business",
        "Children Books",
        "Religion",
        "Art and Design"
    ]
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);

    }
    // handle book submission
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const updateBookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        }
        // console.log(bookObj)
        //update book data
        fetch(`http://localhost:5000/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data => {
            alert("Book Updated Successfully!!!")
        })
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>

            <form onSubmit={handleUpdate} className="flex lg:w-[950px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" placeholder="Book Name" defaultValue={bookTitle} required />
                    </div>
                    {/* author name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
                    </div>
                </div>
                {/* 2nd row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Image URL" />
                        </div>
                        <TextInput id="imageURL" type="text" placeholder="Book Image URL" defaultValue={imageURL} required />
                    </div>
                    {/* category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState " value="Book Category" />
                        </div>
                        <select id="inputState" name="categoryName" className='w-full rounded'
                            value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </select>
                    </div>
                </div>
                {/* book Descriptions */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your Book Description" defaultValue={bookDescription} required rows={4} className='w-full' />
                </div>
                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" defaultValue={bookPDFURL} required />
                </div>
                <Button type='submit' className='mt-5'>Update Book</Button>
            </form>
        </div>
    )
}

export default EditBooks