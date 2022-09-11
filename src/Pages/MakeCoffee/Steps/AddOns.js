import React from 'react';
import { useStepperContext } from '../../../Hooks/StepperContext';

const AddOns = () => {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    console.log(userData);

    return (
        <div className="bg-[url('https://wallpapercave.com/wp/wp6751383.jpg')] bg-cover p-0 m-0">
            <div className="h-full md:h-96 w-full flex flex-col justify-center items-center md:flex-row">
                <div className="w-full md:w-3/6 mx-auto py-7 px-5 md:pl-20 ">

                    <ul class="grid gap-6 w-full md:grid-cols-1">
                        <li name="Milk" onChange={handleChange} value={userData["Milk"] || ""}>
                            <input type="checkbox" id="Milk" name="AddOns1" value="Milk" class="hidden peer" required />
                            <label for="Milk" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="w-full text-lg font-semibold">Milk</div>
                                    <div class="w-full">Add Milk In Coffee</div>
                                </div>
                                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </label>
                        </li>
                        <li name="Cream" onChange={handleChange} value={userData["Cream"] || ""}>
                            <input type="checkbox" id="Cream" name="AddOns2" value="Cream" class="hidden peer" />
                            <label for="Cream" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="w-full text-lg font-semibold">Cream</div>
                                    <div class="w-full">Add Cream In Coffee</div>
                                </div>
                                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </label>
                        </li>
                        <li name="Latte" onChange={handleChange} value={userData["Latte"] || ""}>
                            <input type="checkbox" id="Latte" name="AddOns3" value="Latte" class="hidden peer" />
                            <label for="Latte" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="w-full text-lg font-semibold">Latte</div>
                                    <div class="w-full">Add Latte In Coffee</div>
                                </div>
                                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-3/6 py-7">
                    <h3 className="text-4xl font-bold py-5 text-white">Add in Your Coffee</h3>
                    <h3 className="text-0xl md:text-7xl font-bold text-white">AddOns</h3>
                </div>
            </div>
        </div>
    );
};

export default AddOns;