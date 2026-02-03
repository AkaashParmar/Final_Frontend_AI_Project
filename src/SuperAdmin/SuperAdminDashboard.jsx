import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
} from "recharts";
import { MoreHorizontal, FileText, BarChart2 } from "lucide-react";
import robotImg from "../assets/SADashImg3.png";
import RobotHeroAnimation from "./Component/RobotHeroAnimation";

export default function SuperAdminDashboard() {
    const performanceData = [
        { name: "Jan", enquiries: 20, companies: 40 },
        { name: "Feb", enquiries: 50, companies: 30 },
        { name: "Mar", enquiries: 10, companies: 20 },
        { name: "Apr", enquiries: 60, companies: 80 },
        { name: "May", enquiries: 30, companies: 50 },
        { name: "Jun", enquiries: 15, companies: 60 },
        { name: "Jul", enquiries: 35, companies: 0 },
        { name: "Aug", enquiries: 5, companies: 20 },
        { name: "Sep", enquiries: 65, companies: 45 },
        { name: "Oct", enquiries: 25, companies: 40 },
        { name: "Nov", enquiries: 45, companies: 50 },
        { name: "Dec", enquiries: 60, companies: 30 },
    ];

    const distributionData = [
        { name: "Product", value: 30, fill: "#d946ef" },
        { name: "IT", value: 50, fill: "#3b82f6" },
        { name: "Non Tech", value: 20, fill: "#f472b6" },
    ];

    const latestCompanies = [
        { name: "Netfotech Solutions", type: "Product", email: "netfotechsolutions@gmail.com", state: "West Bengal", color: "bg-blue-100 text-blue-600" },
        { name: "Netfotech Solutions", type: "IT", email: "netfotechsolutions@gmail.com", state: "Uttar Pradesh", color: "bg-red-100 text-red-600" },
        { name: "Netfotech Solutions", type: "Non Tech", email: "netfotechsolutions@gmail.com", state: "Kerala", color: "bg-pink-100 text-pink-600" },
        { name: "Netfotech Solutions", type: "Product", email: "netfotechsolutions@gmail.com", state: "West Bengal", color: "bg-blue-100 text-blue-600" },
        { name: "Netfotech Solutions", type: "IT", email: "netfotechsolutions@gmail.com", state: "Uttar Pradesh", color: "bg-red-100 text-red-600" },
    ];

    const latestEnquiries = [
        { name: "Netfotech Solutions", phone: "+91-8736381735", email: "netfotechsolutions@gmail.com", date: "22-Jan-2026" },
        { name: "Netfotech Solutions", phone: "+91-8736381735", email: "netfotechsolutions@gmail.com", date: "22-Jan-2026" },
        { name: "Netfotech Solutions", phone: "+91-8736381735", email: "netfotechsolutions@gmail.com", date: "22-Jan-2026" },
        { name: "Netfotech Solutions", phone: "+91-8736381735", email: "netfotechsolutions@gmail.com", date: "22-Jan-2026" },
        { name: "Netfotech Solutions", phone: "+91-8736381735", email: "netfotechsolutions@gmail.com", date: "22-Jan-2026" },
    ];

    const miniChartData1 = [
        { value: 10 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 40 }
    ];
    const miniChartData2 = [
        { value: 30 }, { value: 20 }, { value: 25 }, { value: 15 }, { value: 30 }, { value: 20 }
    ];

    const currentDate = "January 29, 2026";

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
                <div className="lg:col-span-2 bg-[#b936ee] rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-lg">
                    <div className="relative z-10">
                        <p className="text-sm font-medium opacity-90 mb-2">{currentDate}</p>
                        <h1 className="text-3xl font-bold mb-2">Good Afternoon, Leena</h1>
                        <p className="text-sm opacity-80 max-w-md">
                            Control everything effortlessly using superpowers, smart tools, and stress-free efficiency.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 right-10 w-24 h-24 bg-white opacity-10 rounded-full translate-y-10"></div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total</p>
                            <p className="text-gray-500 text-sm font-medium">Companies</p>
                        </div>
                        <div className="p-2 bg-pink-50 rounded-lg">
                            <BarChart2 className="w-5 h-5 text-pink-500" />
                        </div>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                        <h2 className="text-4xl font-bold text-pink-500">121</h2>
                        <div className="w-24 h-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={miniChartData1}>
                                    <Area type="monotone" dataKey="value" stroke="#f472b6" fill="none" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total</p>
                            <p className="text-gray-500 text-sm font-medium">Enquiries</p>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <FileText className="w-5 h-5 text-blue-500" />
                        </div>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                        <h2 className="text-4xl font-bold text-blue-500">121</h2>
                        <div className="w-24 h-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={miniChartData2}>
                                    <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="none" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-blue-900">Overall Distribution</h3>
                        <select className="bg-gray-50 border-none text-xs text-gray-500 rounded-full px-3 py-1 outline-none">
                            <option>Yearly</option>
                            <option>Monthly</option>
                        </select>
                    </div>

                    <div className="flex-1 relative flex justify-center items-center">
                        <div className="w-full h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart
                                    cx="50%" cy="50%"
                                    innerRadius="50%" outerRadius="100%"
                                    barSize={15}
                                    data={distributionData}
                                    startAngle={90} endAngle={450}
                                >
                                    <RadialBar background clockWise dataKey="value" cornerRadius={10} />
                                </RadialBarChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                                <p className="text-gray-400 text-xs">Total</p>
                                <p className="text-gray-400 text-xs">Companies</p>
                                <p className="text-2xl font-bold text-gray-800">121</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-2">
                        {distributionData.map((entry, index) => (
                            <div key={index} className="flex items-center gap-1">
                                <div className="w-8 h-2 rounded-full" style={{ backgroundColor: entry.fill }}></div>
                                <span className="text-xs text-gray-600 font-medium">
                                    {entry.name} <span className="font-bold text-gray-800">{index + 1}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-blue-900">Latest Companies</h3>
                        <a href="#" className="text-sm text-blue-600 underline">View All</a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-900 font-bold uppercase border-b border-gray-50">
                                <tr>
                                    <th className="py-3 px-2">Company</th>
                                    <th className="py-3 px-2">Type</th>
                                    <th className="py-3 px-2">Email</th>
                                    <th className="py-3 px-2">State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestCompanies.map((company, index) => (
                                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                                        <td className="py-3 px-2 flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                                                NS
                                            </div>
                                            <span className="font-medium text-gray-800">{company.name}</span>
                                        </td>
                                        <td className="py-3 px-2">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${company.color}`}>
                                                {company.type}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-gray-600">{company.email}</td>
                                        <td className="py-3 px-2 text-gray-600">{company.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-blue-900">Performance Trends</h3>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-2 rounded-full bg-pink-400"></div>
                            <span className="text-xs text-gray-500">Enquiries</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-2 rounded-full bg-blue-400"></div>
                            <span className="text-xs text-gray-500">Companies</span>
                        </div>
                    </div>
                </div>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f472b6" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#f472b6" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorCompanies" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={true} horizontal={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                            <Tooltip
                                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                                itemStyle={{ fontSize: '12px' }}
                            />
                            <Area type="monotone" dataKey="enquiries" stroke="#f472b6" strokeWidth={2} fillOpacity={1} fill="url(#colorEnquiries)" />
                            <Area type="monotone" dataKey="companies" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorCompanies)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 w-full overflow-x-auto">
                    <div className="flex justify-between items-center px-4 py-2">
                        <h3 className="text-lg font-bold text-blue-900">Latest Enquiries</h3>
                        <a href="#" className="text-sm text-blue-600 underline">View All</a>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="w-full min-w-[650px] text-sm text-left">
                            <thead className="text-xs text-gray-900 font-bold uppercase bg-[#F5F5F5]">
                                <tr>
                                    <th className="py-3 px-2">Company</th>
                                    <th className="py-3 px-2">Phone</th>
                                    <th className="py-3 px-2">Email</th>
                                    <th className="py-3 px-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestEnquiries.map((enquiry, index) => (
                                    <tr key={index} className="border-b border-[#ede6e6] hover:bg-gray-50">
                                        <td className="py-3 px-2 flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                                                NS
                                            </div>
                                            <span className="font-medium text-gray-800 whitespace-nowrap">{enquiry.name}</span>
                                        </td>
                                        <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{enquiry.phone}</td>
                                        <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{enquiry.email}</td>
                                        <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{enquiry.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="lg:col-span-2 w-full h-full border border-gray-100 rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-full">
                    <RobotHeroAnimation />
                </div>
            </div>
        </div>
    );
}