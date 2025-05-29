import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {

    const [user, setUser] = useState<UserData>({
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: { lat: "", lng: "" },
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: "",
        },
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const keys = name.split(".");

        setUser((prev) => {
            const updatedUser = { ...prev };
            let current: any = updatedUser;

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            // If the field is 'id', convert value to number
            if (keys[keys.length - 1] === "id") {
                current[keys[keys.length - 1]] = Number(value);
            } else {
                current[keys[keys.length - 1]] = value;
            }

            return updatedUser;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    {/* Basic Fields */}
                    <Input label="Id" name="id" value={String(user.id)} onChange={handleChange} />

                    <Input label="Name" name="name" value={user.name} onChange={handleChange} />
                    <Input label="Username" name="username" value={user.username} onChange={handleChange} />
                    <Input label="Email" name="email" value={user.email} onChange={handleChange} />
                    <Input label="Phone" name="phone" value={user.phone} onChange={handleChange} />
                    <Input label="Website" name="website" value={user.website} onChange={handleChange} />

                    {/* Address Fields */}
                    <Input label="Street" name="address.street" value={user.address.street} onChange={handleChange} />
                    <Input label="Suite" name="address.suite" value={user.address.suite} onChange={handleChange} />
                    <Input label="City" name="address.city" value={user.address.city} onChange={handleChange} />
                    <Input label="Zipcode" name="address.zipcode" value={user.address.zipcode} onChange={handleChange} />
                    <Input label="Geo Latitude" name="address.geo.lat" value={user.address.geo.lat} onChange={handleChange} />
                    <Input label="Geo Longitude" name="address.geo.lng" value={user.address.geo.lng} onChange={handleChange} />

                    {/* Company Fields */}
                    <Input label="Company Name" name="company.name" value={user.company.name} onChange={handleChange} />
                    <Input label="Catch Phrase" name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} />
                    <Input label="BS" name="company.bs" value={user.company.bs} onChange={handleChange} />

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Reusable Input component
const Input = ({
    label,
    name,
    value,
    onChange,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-medium mb-1">
            {label}
        </label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
        />
    </div>
);

export default UserModal;
