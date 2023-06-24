import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
}

const Provider = ({ children }: Props) => {
    // TODO: add some theme functionality
    return <>
        <main>
            {children}
        </main>
    </>
}

export default Provider