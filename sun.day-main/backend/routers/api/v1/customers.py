from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from models.users import User
from models.ObjectId import PyObjectId
from models.customers import Customer,CustomerOut
from db.database import db
from core.oauth import get_current_user

router = APIRouter()

# @route GET /api/v1/customers
# @desc Get all customers
# @access Private
@router.get('/',response_model=List[CustomerOut])
async def get_customers(current_user:User = Depends(get_current_user)):
	pipeline = [ 
		{ '$match' : { 'username' : current_user.username } }, 
		{ '$project' : { '_id' : 0, 'customers' : 1 } },
		{ '$lookup' : { 'from' : 'customers', 'localField' : 'customers', 'foreignField' : '_id', 'as' : 'customers' } } ]
	customers = await db["users"].aggregate(pipeline).to_list(length=None)
	customers = customers[0]['customers']
	if not customers:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail = f'No customers found')
	return customers

# @route GET /api/v1/customers/{customer_id}
# @desc Get a customer by id
# @access Private
@router.get('/{customer_id}',response_model=CustomerOut)
async def get_customer_by_id(customer_id:PyObjectId,current_user:User = Depends(get_current_user)):
	user = await db["users"].find_one({"username":current_user.username},{'customers':1, '_id':0})
	if 'customers' not in user or customer_id not in user['customers']:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail = f'Customer not found')

	customer = await db["customers"].find_one({"_id":customer_id})
	if not customer:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail = f'Customer not found')
	return customer
