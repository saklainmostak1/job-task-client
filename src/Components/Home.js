import React from 'react';
import { Link } from 'react-router-dom';
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import Category from './Category';

const Home = () => {
    return (
        <div className=''>
            <Category></Category>
            <h2 className="text-4xl text-center mb-5">Add items</h2>
            <form >
                <div className="container mx-auto px-3 pt-10 pb-10 bg-[#ddddddac]">
                    <h1 className="font-bold text-2xl ">Add Items</h1>
                    <div className="lg:flex ">
                        <div className=" mt-8  w-full lg:mr-5">
                            <div className=" bg-white p-5 rounded-md">
                                <h3 className="text-xl font-bold">Product Information</h3>
                                <div className="divider"></div>
                                <div className="mt-8 lg:flex md:flex items-center">
                                    <div className="w-60 mb-1">
                                        <label htmlFor="">
                                            Category
                                            <sup>
                                                <span className="text-red-500 mr-1">*</span>
                                            </sup>
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <select
                                            name='category'
                                            className="select select-bordered w-full rounded-sm"

                                            id=""

                                        >
                                            <option selected disabled>Select A Category</option>


                                        </select>
                                    </div>
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
                                        name='name'
                                        placeholder="Product Name"
                                        type="text"
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

                                <thead>
                                    <tr>
                                        <th className="bg-white"></th>
                                        <th className="bg-white">Category</th>
                                        <th className="bg-white">Title</th>
                                        <th className="bg-white">Description</th>
                                        <th className="bg-white">Active</th>
                                        <th className="bg-white"> Created Time</th>
                                        <th className="bg-white"> Options</th>

                                    </tr>
                                </thead>
                                <tbody>



                                    <tr >
                                       
                                       
                                       
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="">
                                                <div className="flex items-center ">
                                                   
                                                    <Link to={``}>

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
                                                    // onClick={() => handleDelete(product._id)}
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

export default Home;