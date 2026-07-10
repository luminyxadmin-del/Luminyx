import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin.server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { error } = await supabaseAdmin
      .from('partner_submissions')
      .insert([{
        organisation: body.organisation,
        sector: body.sector,
        work_email: body.workEmail,
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
