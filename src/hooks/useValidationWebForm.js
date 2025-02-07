export const useValidationWebForm = (validationSchema) => {
    return async (event, setErrors) => {
        const form = new FormData(event.target)
        const formData = Object.fromEntries(form.entries())
        setErrors([])

        try {
            await validationSchema.validate(formData, { abortEarly: false })
        } catch (err) {
            setErrors(err.inner.map(e => ({
                selector: `.form-group.${e.path}`,
                error: e.message,
                name: e.path
            })))
        }
    }
}