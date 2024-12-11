'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { testAPICall } from '../_actions/chat'

export default function ChatBox() {
  return (
    <div className="p-10 flex flex-col h-full bg-slate-700">
      {/* Output Component */}
      <div className="p-2 grow bg-green-300/25">Green</div>
      {/* Input component */}
      <div className="p-2 flex-none bg-blue-300/25">
        <div className="flex">
          <Input />
          <Button
            onClick={() => {
              console.log('I was clicked')
              testAPICall()
            }}
          >
            Button goes here
          </Button>
        </div>
      </div>
    </div>
  )
}
