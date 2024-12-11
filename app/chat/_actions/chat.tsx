'use server'

export async function testAction() {
  console.log('timeout start')
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('timeout end')
  return true
}

export async function testAPICall() {
  console.log('timeout start')
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log('timeout end')
  return true
}
