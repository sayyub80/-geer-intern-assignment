import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

export async function GET() {
  try {
    await dbConnect();
    
    const categories = await Product.distinct('category');
    const materials = await Product.distinct('material');
    
    return NextResponse.json({
      categories,
      materials
    });
    
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching filters', error: error.message },
      { status: 500 }
    );
  }
}