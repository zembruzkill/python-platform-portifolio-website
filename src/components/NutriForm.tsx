'use client'

import { useEffect, useState } from 'react'
import Header from './layout/headers/Header'

import JsPDF from 'jspdf'

import {
    Input,
    Button,
    Select,
    SelectItem,
    Spinner,
    Textarea,
} from '@nextui-org/react'

export default function NutriForm() {
    const [formData, setFormData] = useState({
        peso: '',
        altura: '',
        idade: '',
        sexo: '',
        acorda: '',
        dorme: '',
        treino: '',
        restricoesAlimentares: '',
        preferenciasAlimentares: '',
        desgostosAlimentares: '',
        estiloDeVida: '',
        objetivo: '',
    })
    const [dieta, setDieta] = useState('')
    const [loading, setLoading] = useState(false)

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const submitForm = () => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch('/api/generative', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                })
                const result = await response.json()

                setDieta(result.body)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }

    return (
        <>
            <div className="bg-[#0D1224] min-h-screen">
                <div className="bg-grid-background">
                    <Header items={true} />
                    <div className="mx-auto max-w-7xl items-center justify-between p-4">
                        <div className="w-full flex rounded-md bg-white p-6 justify-center mt-20">
                            <div className=" w-full">
                                <h1 className="text-title-md font-bold text-center pb-6">
                                    Formulário de Nutrição
                                </h1>

                                <div className="flex w-full flex-col mb-4">
                                    <form className="w-full flex flex-col gap-4">
                                        <Input
                                            type="peso"
                                            label="Peso"
                                            placeholder="Insira seu peso (kg)"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'peso',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Input
                                            type="altura"
                                            label="Altura"
                                            placeholder="Insira sua altura (cm)"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'altura',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Input
                                            type="idade"
                                            label="Idade"
                                            placeholder="Insira sua idade"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'idade',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Select
                                            label="Sexo"
                                            placeholder="Selecione seu sexo"
                                            className="w-full"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'sexo',
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <SelectItem
                                                key="masculino"
                                                value="masculino"
                                            >
                                                Masculino
                                            </SelectItem>
                                            <SelectItem
                                                key="feminino"
                                                value="feminino"
                                            >
                                                Feminino
                                            </SelectItem>
                                        </Select>
                                        <Input
                                            type="acorda"
                                            label="Acorda"
                                            placeholder="Que horas acorda?"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'acorda',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Input
                                            type="dorme"
                                            label="Dorme"
                                            placeholder="Que horas dorme?"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'dorme',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Input
                                            type="treino"
                                            label="Treino"
                                            placeholder="Treina? Que horas?"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'treino',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Textarea
                                            label="Restrições alimentares"
                                            placeholder="Descreva suas restrições alimentares"
                                            className="w-full"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'restriçõesAlimentares',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Textarea
                                            label="Preferências alimentares"
                                            placeholder="Descreva suas preferências alimentares"
                                            className="w-full"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'preferenciasAlimentares',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Textarea
                                            label="Desgostos alimentares"
                                            placeholder="Descreva seus desgostos alimentares"
                                            className="w-full"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'desgostosAlimentares',
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <Select
                                            label="Estilo de Vida"
                                            placeholder="Selecione seu estilo de vida"
                                            className="w-full"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'estiloDeVida',
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <SelectItem
                                                key="sedentario"
                                                value="sedentario"
                                            >
                                                Sedentário
                                            </SelectItem>
                                            <SelectItem
                                                key="ativo"
                                                value="ativo"
                                            >
                                                Ativo
                                            </SelectItem>
                                            <SelectItem
                                                key="muito-ativo"
                                                value="muito-ativo"
                                            >
                                                Muito Ativo
                                            </SelectItem>
                                        </Select>
                                        <Select
                                            label="Objetivo"
                                            placeholder="Selecione seu objetivo"
                                            className="w-full"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'objetivo',
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <SelectItem
                                                key="definicao"
                                                value="definicao"
                                            >
                                                Definição
                                            </SelectItem>
                                            <SelectItem
                                                key="emagrecimento"
                                                value="emagrecimento"
                                            >
                                                Emagrecimento
                                            </SelectItem>
                                            <SelectItem
                                                key="ganho-de-massa"
                                                value="ganho-de-massa"
                                            >
                                                Ganho de Massa
                                            </SelectItem>
                                            <SelectItem
                                                key="ganho-de-massa+definicao"
                                                value="ganho-de-massa+definicao"
                                            >
                                                Ganho de Massa + Definição
                                            </SelectItem>
                                            <SelectItem
                                                key="melhorar-performance-atletica"
                                                value="melhorar-performance-atletica"
                                            >
                                                Melhorar Performance Atlética
                                            </SelectItem>
                                            <SelectItem
                                                key="melhorar-saude-geral"
                                                value="melhorar-saude-geral"
                                            >
                                                Melhorar Saúde Geral
                                            </SelectItem>
                                        </Select>
                                    </form>
                                </div>
                                <div className="mx-auto items-center text-center">
                                    {loading && (
                                        <Spinner
                                            color="primary"
                                            className="text-center"
                                            size="lg"
                                        />
                                    )}
                                    <Button
                                        onClick={submitForm}
                                        className="w-full bg-indigo-600 font-bold text-white"
                                    >
                                        Gerar Dieta
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full gap-4 rounded-md bg-white p-6 mt-4">
                            <Textarea
                                id="report"
                                label="Dieta Personalizada"
                                placeholder=""
                                className="w-full"
                                value={dieta}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
