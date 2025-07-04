
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const updateCoffeeData = useLoaderData();
    console.log(updateCoffeeData)
    const { _id, name, supplier, photo, price, details, quantity, taste } = updateCoffeeData;
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee)
        //   send updated coffee to the db
        fetch(`https://module-56-5-coffee-store-server.vercel.app/coffees/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "coffee updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                 form.reset('');
            })
            
    }
    return (
        <div className='px-28 pb-10 bg-[#F4F3F0]'>
            <div className='text-center p-12 space-y-3'>
                <h1 className='text-6xl'>Update New Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter coffee quantity" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full my-3" placeholder="Enter photo URL" />
                </fieldset>
                <input type="submit" className='btn w-full bg-[#E3B577] border border-[#331A15]' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;