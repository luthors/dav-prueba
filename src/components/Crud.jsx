import React from 'react'
import { useEffect, useState } from 'react';
import maestro from '../img/maestro.png'
import nomina from '../img/nomina.png'
import pensiones from '../img/pensiones.png'
import cuenta from '../img/cuenta.png'
import visa from '../img/visa.jfif'
import NumberFormat from "react-number-format";



const Crud = () => {
    const url = 'https://my-json-server.typicode.com/stebanjimenezg/test/db'
    const [datos, setDatos] = useState()
    const obtenerAPI = async () => {
        const res = await fetch(url)
        console.log("llega: ", res)
        const resJson = await res.json()
        setDatos(resJson.accounts)
        console.log("resp ", resJson.accounts[0])
    }
    useEffect(() => {
        obtenerAPI()

    }, []);


    return (
        <div className=" bg-red-100 " >
            <br />
            <h1 className="text-center text-xl font-medium bg-red-100 text-red-600 uppercase">Historico de productos</h1>
            <br />
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Producto
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Tipo
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Estado
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Saldo
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {!datos ? 'Cargando...' : datos.map((dato, index) => (
                                        <tr key={dato.number}>
                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-3 h-10 w-20">
                                                        {index === 0 ?
                                                            <img className="h-10 w-20" src={maestro} alt="" />
                                                            : index === 1 ?
                                                                <img className="h-10 w-20" src={visa} alt="" />
                                                                : index === 2 ?
                                                                    <img className="h-10 w-20" src={cuenta} alt="" />
                                                                    : index === 3 ?
                                                                        <img className="h-10 w-20" src={nomina} alt="" />
                                                                        : index === 4 ?
                                                                            <img className="h-10 w-20" src={pensiones} alt="" />
                                                                            : null}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{dato.name}</div>
                                                        <div className="text-sm text-gray-500">{dato.number}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{dato.type}</div>
                                                <div className="text-sm text-gray-500">{ }</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {dato.status === "activa" ?
                                                    <span className="px-4 py-2 inline-flex text-s leading-5 font-semibold rounded-full bg-green-100 text-green-800 uppercase ">
                                                        {dato.status}
                                                    </span>
                                                    : <span className="px-4 py-2 inline-flex text-s leading-5 font-semibold rounded-full bg-red-100 text-red-800 uppercase ">
                                                        {dato.status}
                                                    </span>
                                                }
                                            </td>

                                            <td className=" text-justify proportional-nums px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">

                                                <NumberFormat
                                                    thousandsGroupStyle="thousand"
                                                    value={Number.parseFloat(dato.balance)}
                                                    prefix="$ "
                                                    decimalSeparator="."
                                                    displayType="label"
                                                    type="text"
                                                    thousandSeparator={true}
                                                    allowNegative={true} />

                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud
