import React from 'react';

function ProgramCard({ name, date, status, onCancel }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md">
            <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    รูปทัวร์
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>{date}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <span className={`text-lg ${status === 'paid' ? 'text-green-500' : 'text-red-500'}`}>
                    {status === 'paid' ? 'ชำระเงินแล้ว' : 'ยังไม่ได้ชำระ'}
                </span>
                <button
                    onClick={onCancel}
                    className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                >
                    ยกเลิก
                </button>
            </div>
        </div>
    );
}

function MyPrograms() {
    const programs = [
        {
            name: 'ทริปคลุกฝุ่นทัวร์',
            date: '30 กรกฎาคม 2567',
            status: 'paid',
        },
    ];

    const handleCancel = () => {
        alert('คุณยกเลิกทริปนี้แล้ว');
    };

    return (
        <div className="min-h-screen p-8 justify-center ">

            <div className="mt-8 space-y-4">
                {programs.map((program, index) => (
                    <ProgramCard
                        key={index}
                        name={program.name}
                        date={program.date}
                        status={program.status}
                        onCancel={handleCancel}
                    />
                ))}
            </div>
            <div className="mt-8 space-y-4">
                {programs.map((program, index) => (
                    <ProgramCard
                        key={index}
                        name={program.name}
                        date={program.date}
                        status={program.status}
                        onCancel={handleCancel}
                    />
                ))}
            </div>
            <div className="mt-8 space-y-4">
                {programs.map((program, index) => (
                    <ProgramCard
                        key={index}
                        name={program.name}
                        date={program.date}
                        status={program.status}
                        onCancel={handleCancel}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyPrograms;
