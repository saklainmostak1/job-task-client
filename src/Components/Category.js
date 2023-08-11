import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Category = () => {

    const [status, setStatus] = useState(false)
    const handleToggle = () => {
        setStatus((current) => !current);
      };


    const { data: allCategory = [], isLoading, refetch
    } = useQuery({
        queryKey: ['allCategory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/allCategory')
            const data = await res.json()
            return data
        }
    })


    const handleAdd = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const time = form.time.value
        const description = form.description.value
        const active = form.toggle.value
  

        console.log(name, description, active, time);

        const addProducts = {
            name, description, active, time
        }
        fetch('http://localhost:5001/allCategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProducts)

        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {

                    refetch()
                    toast.success('Sucessfully add')
                }
            })
            .catch(error => console.error(error))
        // form.reset('')
        
       
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure delete')

        if (proceed) {
            fetch(`http://localhost:5001/allCategory/${id}`, {
                method: "DELETE",

            })
                .then(Response => Response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Delete Successfully')
                    }

                })
        }
    }


    return (
        <div className=''>
            <h2 className="text-4xl text-center mb-5">Add Category</h2>
            <form onSubmit={handleAdd}>
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
                                        name='name'
                                        placeholder="Product Name"
                                        type="text"
                                        className="input input-bordered mt-1 w-full rounded-sm"
                                    />
                                </div>
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
                                        name='time'
                                        placeholder="Product Name"
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
                                            name='description'
                                            type='text'
                                            id=""
                                            className="textarea textarea-bordered w-full"
                                            cols="30"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className=" flex mt-5 items-center">
                                    <label htmlFor="" className="w-60">
                                        Activity Status
                                    </label>
                                    <input
                                    value={status}
                                  onClick={handleToggle}
                                   
                                        name='toggle'

                                        type="checkbox"  className="toggle toggle-primary" />

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

            <div>

                <div className="bg-slate-100 container mx-auto px-5 lg:px-12 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">All Category</h1>

                    </div>
                    <div className="mt-8 bg-white p-7 rounded-xl">

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="bg-white"></th>

                                        <th className="bg-white">Title</th>
                                        <th className="bg-white">Description</th>
                                        <th className="bg-white">Activity Status</th>
                                        <th className="bg-white"> Created Time</th>
                                        <th className="bg-white"> Options</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        allCategory.map((category, i) =>
                                            <tr >
                                                <th>{i + 1}</th>
                                                <td>{category.name}</td>
                                                <td>{category.description}</td>
                                                <td>
                                                    {
                                                        category && category.active === "true" &&
                                                        <p>active</p>
                                                    
                                                        
                                                    }
                                                    {
                                                        category && category.active === "false" &&
                                                        <p>Not active</p>
                                                    
                                                        
                                                    }
                                                 
                                                    {/* {
                                                        category && category.check &&

                                                        <input

                                                            type="checkbox" checked class="toggle toggle-primary" />
                                                    } */}
                                                </td>
                                                <td>{category.time}</td>
                                                <td className="">
                                                    <div className="flex items-center ">

                                                        <Link to={`/category/${category._id}`}>

                                                            <label
                                                                className="w-8 h-8 bg-blue-200 inline-block rounded-full text-center cursor-pointer group hover:bg-blue-500 duration-300 mr-1"
                                                                htmlFor=""
                                                            >
                                                                <p className=' mt-2 ml-2 text-blue-700 group-hover:text-white duration-300'>
                                                                    <HiPencilAlt></HiPencilAlt>
                                                                </p>
                                                            </label>
                                                        </Link>



                                                        <button
                                                            onClick={() => handleDelete(category._id)}
                                                        >
                                                            <label
                                                                className="w-8 h-8 bg-red-200 inline-block rounded-full text-center cursor-pointer group hover:bg-red-500 duration-300 mr-1"
                                                                htmlFor=""
                                                            >
                                                                <p className=' mt-2 ml-2 text-red-500 group-hover:text-white duration-300'>
                                                                    <HiTrash></HiTrash>
                                                                </p>

                                                            </label>
                                                        </button>

                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                        {/* <div className=" mt-5 paigination">
        {
            pages.map((page, index) =>
                <button
                    key={index + 1}
                    onClick={() => setCurrentPage(page)}
                    className=

                    {page === currentPage ? 'active' : ''}
                >{page}</button>
            )
        }

    </div> */}

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Category;