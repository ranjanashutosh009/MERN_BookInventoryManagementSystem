import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Textarea } from 'flowbite-react';

const UploadBook = () => {
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
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        }
        console.log(bookObj)
        // upload books
        fetch("http://localhost:5000/upload-book", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            alert("Book Uploaded Successfully!!!")
            form.reset()
        })

    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[950px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" type="text" placeholder="Book Name" required />
                    </div>
                    {/* author name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" type="text" placeholder="Author Name" required />
                    </div>
                </div>
                {/* 2nd row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Image URL" />
                        </div>
                        <TextInput id="imageURL" type="text" placeholder="Book Image URL" required />
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
                    <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your Book Description" required rows={4} className='w-full' />
                </div>
                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required />
                </div>
                <Button type='submit' className='mt-5'>Upload</Button>
            </form>
        </div>
    )
}

export default UploadBook