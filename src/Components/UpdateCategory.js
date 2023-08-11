
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {

    const [status, setStatus] = useState(true)
    const handleToggle = () => {
        setStatus((current) => !current);
    };
    console.log(status)
    const { id } = useParams()

    //
    const [updateCategory, setUpdateCategory] = useState([])

    useEffect(() => {
        fetch(`https://server-omega-ebon-23.vercel.app/allCategory/${id}`)
            .then(Response => Response.json())
            .then(data => setUpdateCategory(data))
    }, [id])


    console.log(updateCategory, 'nayan')

    const handleEditHome = event => {
        event.preventDefault()
        fetch(`https://server-omega-ebon-23.vercel.app/allCategory/${updateCategory._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCategory)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Successfully Update!');
                }

            })
    }

    const handleChange = event => {
        const field = event.target.name
        const value = event.target.value
        const review = { ...updateCategory }
        review[field] = value
        setUpdateCategory(review)
    }


    return (
        <div className=''>
            <h2 className="text-4xl text-center mb-5">Add Category</h2>
            <form onSubmit={handleEditHome}>
                <div className="container mx-auto px-3 pt-10 pb-10 bg-[#ddddddac]">
                    <h1 className="font-bold text-2xl ">Add Category</h1>
                    <div className="lg:flex ">
                        <div className=" mt-8  w-full lg:mr-5">
                            <div className=" bg-white p-5 rounded-md">
                                <h3 className="text-xl font-bold">Category Information</h3>
                                <div className="divider"></div>
                                <div className="mt-6 lg:flex md:flex items-center">
                                    <div className="w-60">
                                        <label htmlFor="">
                                            Title
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <input
                                        onChange={handleChange}
                                        defaultValue={updateCategory.name}
                                        name='name'

                                        type="text"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                    />
                                </div>
                                <div className="mt-6 lg:flex md:flex items-center">
                                    <div className="w-60">
                                        <label htmlFor="">
                                            Time
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <input
                                        onChange={handleChange}

                                        name='time'

                                        type="time"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                    />
                                </div>




                                <div className="mt-4 lg:flex md:flex ">
                                    <div className="w-60 mb-1">
                                        <label htmlFor="">Description</label>
                                    </div>
                                    <div className="w-full">
                                        <textarea
                                            onChange={handleChange}
                                            defaultValue={updateCategory.description}
                                            name='description'
                                            type='text'
                                            id=""
                                            className="textarea textarea-bordered w-full"
                                            cols="30"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className=" flex mt-5 items-center " 
                                
                                >
                                    <label htmlFor="" className="w-60">
                                        Activity Status
                                    </label>

                                    {
                                        updateCategory && updateCategory.active === "true" &&
                                        <input
                                     
                                            type="checkbox" checked class="toggle toggle-primary" />


                                    }
                                    {
                                        updateCategory && updateCategory.active === "false" &&
                                        <input
                                        name='active'
                                        onClick={handleToggle}
                                        value={status}
                                        onChange={handleChange}
                                           
                                            type="checkbox" class="toggle toggle-primary" />


                                    }




                                </div>



                            </div>

                        </div>

                    </div>
                    <div className="flex justify-end">
                        <input

                            className="bg-[#ff8084] text-white px-6 py-2 lg:font-medium text-small lg:text-sm rounded-md my-7 cursor-pointer " type="submit" />

                    </div>

                </div>
            </form>



        </div>
    );
};

export default UpdateCategory;