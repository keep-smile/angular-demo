/*
import {Injectable} from '@angular/core';
import {ProductService} from '../product.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as productActions from './state.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Product} from '../product';
import {of} from 'rxjs';

@Injectable()
export class StateEffects {

  constructor(private  actions$: Actions,
              private productService: ProductService) {
  }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.LoadProducts),
    mergeMap((action: productActions.LoadProducts) => this.productService.getProducts().pipe(
      map((products: Product[]) => (new productActions.LoadProductsSuccess(products))),
      catchError(err => of(new productActions.LoadProductsFail(err)))
    ))
  );


  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.UpdateProduct),
    map((action: productActions.UpdateProduct) => action.payload),
    mergeMap((product: Product) => this.productService.updateProduct(product).pipe(
      map((updatedProduct) => (new productActions.UpdateProductSuccess(updatedProduct))),
      catchError(err => of(new productActions.UpdateProductFail(err)))
    ))
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.DeleteProduct),
    map((action: productActions.DeleteProduct) => action.payload),
    mergeMap((productId: number ) => this.productService.deleteProduct(productId).pipe(
      map(() => (new productActions.DeleteProductSuccess())),
      catchError(err => of(new productActions.DeleteProductFail(err)))
    ))
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.CreateProduct),
    map((action: productActions.CreateProduct) => action.payload),
    mergeMap((product: Product) => this.productService.createProduct(product).pipe(
      map((createdProduct) => (new productActions.CreateProductSuccess(createdProduct))),
      catchError(err => of(new productActions.CreateProductFail(err)))
    ))
  );
}
*/
