import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const schema =
    z.object(
        {
            data: z.string().min(1, { message: 'Campo obrigatório' }),
            additionalInformation: z.string().min(1, { message: 'Campo obrigatório' }),
            images: z.array(z.any()).min(1, { message: 'Campo obrigatório' })
                .max(3, { message: 'Máximo de 3 imagens' }),
        }
    )

export const additionalInformationSchema = zodResolver(schema)
export type AdditionalInformationForm = z.infer<typeof schema>