import React from 'react'

const Rules = () => {
    const Rules = [
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' },
    ]
    return (
        <div className='rules_modal'>
            <h1>Here are the rules</h1>
            {Rules.map((item) => {
                return (
                    <div className='Rules_items'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#FFD700" />
                            <path d="M13.0018 8.19922L16.7998 11.9972L13.0018 15.7952" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.202 8.19922L12 11.9972L8.202 15.7952" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>{item.name}</span>
                    </div>
                )
            })}
        </div>
    )
}
export default Rules
