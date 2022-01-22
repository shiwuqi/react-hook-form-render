import * as React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Input, Button } from 'antd';

const FormRender = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '40%' }}>
            <Controller
                name='firstName'
                control={control}
                render={({ field }) => <label>FirstName: <Input {...field} placeholder='FirstName' /></label>}
            />
            <Controller
                name='lastName'
                control={control}
                render={({ field }) => <label>LastName: <Input {...field} placeholder='LastName' /></label>}
            />
            <Button type='primary' htmlType='submit'>submit</Button>
        </form>

    )
}

export default FormRender;