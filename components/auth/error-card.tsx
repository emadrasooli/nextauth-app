import { CardWrapper } from "./card-wrapper"
import { BsExclamationTriangle } from "react-icons/bs"

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLable="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLable="Back to login"
        >
            <div className="flex justify-center">
                <BsExclamationTriangle className="text-destructive text-3xl"/>
            </div>
        </CardWrapper>
    )
}