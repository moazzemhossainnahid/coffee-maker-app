import { useStepperContext } from "../../../Hooks/StepperContext";



export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/3a/06/94/3a0694ed94296bfc5da8939622766a40.jpg')] bg-cover p-0 m-0">
      <div className="h-full md:h-96 w-full flex flex-col justify-center items-center md:flex-row">
        <div className="w-full md:w-3/6 mx-auto py-7 px-5 md:pl-20 ">
          <div class="flex items-center mb-4">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-1" class="ml-3 text-xl md:text-3xl font-medium text-white dark:text-gray-300">Espresso</label>
          </div>
          <div class="flex items-center mb-4">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-2" class="ml-3 text-xl md:text-3xl font-medium text-white dark:text-gray-300">Cappuccino</label>
          </div>
          <div class="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-2" class="ml-3 text-xl md:text-3xl font-medium text-white dark:text-gray-300">Latte</label>
          </div>
        </div>
        <div className="w-full md:w-3/6 py-7">
          <h3 className="text-4xl font-bold py-5 text-white">Choose a Coffee</h3>
          <h3 className="text-0xl md:text-7xl font-bold text-white">Hub</h3>
        </div>
      </div>
    </div>
  );
}