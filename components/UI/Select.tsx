
const Select= ({ name, placeholder, value, onChange })  => {
    return (
        <div className="flex flex-col mb-4">
            <label className='flex mb-2'>{name}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-md p-2 hover:bg-blue-100 focus:border-blue-500"
            >
                <option value="" disabled>{placeholder}</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    );
}

export default Select;