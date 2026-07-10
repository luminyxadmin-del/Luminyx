import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin.server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([{
        full_name: body.fullName,
        work_email: body.workEmail,
        organisation: body.organisation,
        how_can_we_help: body.howCanWeHelp,
        message: body.message,
      }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Unexpected error' }, { status: 500 })
  }
}
