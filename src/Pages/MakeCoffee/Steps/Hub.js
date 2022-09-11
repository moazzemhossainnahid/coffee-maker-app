import { useStepperContext } from "../../../Hooks/StepperContext";



export default function Hub() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/3a/06/94/3a0694ed94296bfc5da8939622766a40.jpg')] bg-cover p-0 m-0">
      <div className="h-full md:h-96 w-full flex flex-col justify-center items-center md:flex-row">
        <div className="w-full md:w-3/6 mx-auto py-7 px-5 md:pl-20 ">

          <ul class="grid gap-6 w-full md:grid-cols-1">
            <li name="Espresso" onChange={handleChange} value={userData["Espresso"] || ""}>
              <input type="radio" id="Espresso" name="Hub" value="Espresso" class="hidden peer" required />
              <label for="Espresso" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Espresso</div>
                  <div class="w-full">Good for small websites</div>
                </div>
                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </label>
            </li>
            <li name="Cappuccino" onChange={handleChange} value={userData["Cappuccino"] || ""}>
              <input type="radio" id="Cappuccino" name="Hub" value="Cappuccino" class="hidden peer" />
              <label for="Cappuccino" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Cappuccino</div>
                  <div class="w-full">Good for large websites</div>
                </div>
                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </label>
            </li>
            <li name="Latte" onChange={handleChange} value={userData["Latte"] || ""}>
              <input type="radio" id="Latte" name="Hub" value="Latte" class="hidden peer" />
              <label for="Latte" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">Latte</div>
                  <div class="w-full">Good for large websites</div>
                </div>
                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </label>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/6 py-7">
          <h3 className="text-4xl font-bold py-5 text-white">Choose a Coffee</h3>
          <h3 className="text-0xl md:text-7xl font-bold text-white">Hub</h3>
        </div>
      </div>
    </div>
  );
}