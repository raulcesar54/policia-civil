import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { format } from 'date-fns'
import { Info } from "lucide-react"
import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { usePostOcorrenciaMutation } from '../../../model/services'
import { Button } from "../../ui/button"
import { Field } from "../../ui/field"
import { ImageUploader } from '../../ui/imageUploader'
import { AdditionalInformationForm, additionalInformationSchema } from './schema'
interface AddInformationFormProps {
    ocoId: number
    id?: string
    updateInformation: (
        payload: {
            ocoId: number
            informacao: string
            data: string
            descricao: string
            id: number
            anexos: any[]
        }) => void
}
export const AddInformationForm = (props: AddInformationFormProps) => {
    const [postOcorrencia, { data, isLoading, error }] = usePostOcorrenciaMutation()
    let [isOpen, setIsOpen] = useState(false)
    const { formState, register, handleSubmit, setValue } = useForm({
        resolver: additionalInformationSchema,
        reValidateMode: 'onChange'
    })
    const handleSubmiForm = (value: AdditionalInformationForm) => {
        const payload = {
            ocoId: props.ocoId,
            informacao: value.additionalInformation,
            data: format(new Date(value.data), 'yyyy-MM-dd'),
            descricao: 'anexos',
            anexos: value.images
        }
        toast.promise(
            postOcorrencia(payload).unwrap(),
            {
                loading: 'Enviando...',
                success: (data) => {
                    setIsOpen(false)
                    props.updateInformation({ ...payload, id: data.id })
                    return 'Informação enviada com sucesso!'
                },
                error: (err) => {
                    console.error(err)
                    return 'Erro ao enviar informação'
                }
            })
    }
    return (
        <>
            <Toaster />
            <div className="fixed bottom-0 w-full left-0">
                <Button type="button" disabled={false} onClick={() => setIsOpen(true)}>
                    <div className="flex w-full gap-3 justify-center items-center">
                        <Info size={18} />
                        Informar nova ocorrencia
                    </div>
                </Button>
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50" >
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 bottom-0 flex w-screen items-center justify-center md:justify-end">
                    <DialogPanel className="mt-auto w-full  border bg-white md:left-0 md:max-w-md md:h-full p-8 rounded-t-lg md:rounded-t-none ">
                        <DialogTitle className="font-bold text-lg">Adicionar novas informações</DialogTitle>
                        <form onSubmit={handleSubmit(handleSubmiForm)}>
                            <div className="flex flex-col gap-4 mt-4">
                                <Field type='date' label="visto ultima vez em:" error={formState.errors.data?.message} placeholder='Descrição' register={{ ...register('data') }} />
                                <Field label="descrição" error={formState.errors.additionalInformation?.message} placeholder='Informações adicionais' register={{ ...register('additionalInformation') }} isTextArea />
                                <ImageUploader register={{ ...register('images') }} onChange={value => {
                                    setValue('images', value.map(item => item.file), { shouldValidate: true })
                                }} error={formState.errors.images?.message} />
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button type="submit" disabled={!formState.isValid || isLoading}>Enviar</Button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}